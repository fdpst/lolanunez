<?php

namespace App\Searchers;

use App\ModelsApp\AppEmpleado;
use Illuminate\Http\Request;

class EmpleadoSearch {

    public static function apply(Request $request){
      $itemsPerPage = $request->itemsPerPage;

      $empleados = (new AppEmpleado())->newQuery();

      $total = $empleados->count();

      return [
        'data'  => ($itemsPerPage < 0) ? $empleados->get() : $empleados->paginate($itemsPerPage),
        'total' => $total
      ];

    }
}
