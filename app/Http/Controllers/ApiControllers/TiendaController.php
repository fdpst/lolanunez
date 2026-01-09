<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\WebUser;

class TiendaController extends Controller
{
  public function getWebUsers(Request $request){
    $web_users = WebUser::all();
    return response($web_users, 200);
  }

  public function getWebUsersTiendas(Request $request){
    $web_users = WebUser::get(['id', 'name']);
    return response($web_users, 200);
  }

  public function getWebUser($user_id){
    $web_user = WebUser::find($user_id);
    return response($web_user, 200);
  }

  public function saveWebUser(Request $request){
    $web_user = WebUser::updateOrCreate(['id' => $request->id], $request->all());
    return response()->json($web_user, 200);
  }

  public function deleteWebUser($user_id){
    $user = WebUser::find($user_id);
    $user->delete();
    return response()->json('usuario eliminado', 200);
  }
}
