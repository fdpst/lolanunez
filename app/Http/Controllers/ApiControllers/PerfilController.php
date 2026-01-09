<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Requests\UpdatePasswordRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class PerfilController extends Controller
{
  public function changePassword(UpdatePasswordRequest $request){
      $auth_user_id = $request->user()['id'];

      $user = User::find($auth_user_id);

      if (!Hash::check($request->old_password, $user->password)) {
          return response()->json('Contraseña antigua no coincide', 200);
      }

      $user->password = $request->password;
      $user->save();
      return response()->json('Contraseña actualizada', 200);
  }
}
