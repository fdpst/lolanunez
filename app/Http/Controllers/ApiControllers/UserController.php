<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use App\Mail\NewUserMail;
use App\Models\User;
use Mail;
use Str;

class UserController extends Controller
{
  public function getUsers(Request $request){
    $users = User::orderBy('created_at', 'DESC')->paginate(20);
    return response()->json($users, 200);
  }

  public function getUser($user_id){
    $user = User::find($user_id);
    return response()->json($user, 200);
  }

  public function saveUser(UserRequest $request){
    $password = Str::random(8);

    $data = $request->id ? $request : $request->merge(['password' => $password]);

    $user = User::updateOrCreate(['id' => $request->id], $data->all());

    if($user->wasRecentlyCreated){
       Mail::to($user->email)->send(new NewUserMail($user, $password));
    }

    return response()->json($user, 200);
  }

  public function deleteUser($user_id){
    $user = User::find($user_id);
    $user->delete();
    return response()->json('usuario eliminado', 200);
  }
}
