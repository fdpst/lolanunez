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
    $itemsPerPage = $request->per_page ?? 20;
    $sortBy = $request->sortBy ?? 'created_at';
    $orderBy = $request->orderBy ?? 'desc';

    $users = User::query();

    // Búsqueda por nombre o email
    if($request->search){
      $search = "%".$request->search."%";
      $users->where(function($query) use ($search){
        $query->where('name','Like',$search);
        $query->orWhere('email','Like',$search);
      });
    }

    $users = $users->orderBy($sortBy, $orderBy);
    $total = $users->count();

    if($itemsPerPage == -1){
      $usersData = $users->get();
      return response()->json([
        "data" => $usersData,
        "total" => $total,
        "current_page" => 1,
        "per_page" => $total,
        "last_page" => 1
      ], 200);
    }else{
      $usersPaginated = $users->paginate($itemsPerPage);
      return response()->json([
        "data" => $usersPaginated->items(),
        "total" => $total,
        "current_page" => $usersPaginated->currentPage(),
        "per_page" => $itemsPerPage,
        "last_page" => $usersPaginated->lastPage()
      ], 200);
    }
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
