<?php

Route::get('get-secciones-app', 'PruebaController@getSecciones');

Route::post('add-to-queue', 'PruebaController@addToQueue')->middleware('auth:web');

Route::get('get-cliente-actual', 'PruebaController@getClientesActuales')->middleware(['auth:web']);

Route::post('create-turno', 'PruebaController@createTurno')->middleware('auth:web');

Route::post('notificar-turno', 'PruebaController@notificarTurno')->middleware('auth:web');

Route::get('get-auth-user', 'PruebaController@getAuthUser')->middleware(['auth:web']);

Route::get('guardar-turno-empleado/{empleado_id}', 'PruebaController@guardarTurno')->middleware(['auth:web']);

Route::get('get-empleados-and-clientes', 'PruebaController@getEmpleados')->middleware('auth:web');

Route::get('cancelar-cita/{solicitud_id}', 'PruebaController@cancelarCita')->middleware('auth:web');

Route::post('confirmar-cita', 'PruebaController@confirmarCita')->middleware('auth:web');
