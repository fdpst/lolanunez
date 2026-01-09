<?php

namespace App\Observers;
use App\ModelsApp\AppUsuario;

class AppUsuarioObserver
{
  public function creating(AppUsuario $usuario){
   $usuario->password = bcrypt($usuario->password);
  }

  public function updating(AppUsuario $usuario){
   $usuario->password = bcrypt($usuario->password);
 }
}
