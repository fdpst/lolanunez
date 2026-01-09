<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
  public function __construct() {
      $this->middleware('auth:sanctum', ['except' => ['login', 'logout', 'resetPassword', 'updatePassword']]);
  }

  public function login(Request $request){
    $user = User::where('email', $request->email)
      ->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response(['message' => ['Estas credenciales no coinciden con nuestros registros.']], 402);
    }

    $token = $user->createToken('app-token')->plainTextToken;

    $rules = [[
        'action' => 'manage',
        'subject' => 'all'
    ]];

    $response = [
      'userData'         => $user,
      'accessToken'      => $token,
      'userAbilityRules' => $rules
    ];

    return response($response, 201);
  }

  public function logout(Request $request){
    if($request->user()){
      return $request->user()->tokens()->delete();
    }
    return response()->json('logout', 200);
  }

  public function resetPassword(Request $request) : RedirectResponse{
      $validator = Validator::make($request->all(), ['email' => 'required|email']);

      if ($validator->fails()) {
          $messages = $validator->errors()->all();
          $msg = $messages[0];
          return response()->json(['status' => false, 'message' => 'Debe insertar un email valido'], 400);
      }

      $user = User::where('email', $request->email)->first();

      if(!$user){
        return response()->json(['status' => false, 'message' => 'Email no encontrado'], 400);
      }

      $status = Password::sendResetLink($request->only('email'));

      return $status == Password::RESET_LINK_SENT ? back()->with('status', __($status)) : back()->withInput($request->only('email'))->withErrors(['email' => __($status)]);
    }


    public function updatePassword(Request $request){
      $request->validate([
            'token' => ['required'],
            'email' => ['required', 'email'],
            'password' => [
                'required',
                'confirmed', [
                    'reset' => '¡Su contraseña ha sido restablecida!',
                    'sent' => '¡Recordatorio de contraseña enviado!',
                    'token' => 'Este token de restablecimiento de contraseña es inválido.',
                    'user' => 'No se ha encontrado un usuario con esa dirección de correo.',
                    'throttled' => 'Por favor espere antes de volver a intentarlo.',
                    'password' => 'Las contraseñas deben tener al menos seis caracteres y coincidir con la confirmación.'
                ]
            ],
        ]);

        $status = Password::reset($request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => $request->password,
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );
        return response()->json($status, 200);
      }

}
