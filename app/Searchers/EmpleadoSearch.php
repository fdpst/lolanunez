<?php

namespace App\Searchers;

use App\ModelsApp\AppEmpleado;
use Illuminate\Http\Request;

class EmpleadoSearch {

    public static function apply(Request $request){
      $itemsPerPage = $request->itemsPerPage;
      $tiendaId = $request->tienda_id;

      $empleados = (new AppEmpleado())->newQuery();

      // Si se proporciona un tienda_id, cargar los horarios filtrados por tienda
      if ($tiendaId) {
        $empleados->with(['horario' => function($query) use ($tiendaId) {
          $query->where('app_tienda_id', $tiendaId)->orderBy('entrada', 'ASC');
        }]);
      } else {
        // Si no hay tienda_id, cargar todos los horarios
        $empleados->with('horario');
      }

      $total = $empleados->count();

      return [
        'data'  => ($itemsPerPage < 0) ? $empleados->get() : $empleados->paginate($itemsPerPage),
        'total' => $total
      ];

    }
}
