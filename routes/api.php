<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiControllers\AuthController;
use App\Http\Controllers\ApiControllers\UserController;

/*
  admin -> 1
  user  -> 2
  turno -> 3
*/

/*Rutas login*/
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

/*Recuperar contraseña*/
Route::post('forgot-password', [AuthController::class, 'resetPassword']);
Route::post('/update-password', [AuthController::class, 'updatePassword']);

/*Logs de acceso*/
use App\Http\Controllers\ApiControllers\LogController;
Route::get('get-logs', [LogController::class, 'getLogs'])->middleware(['auth:sanctum', 'hasrole:1']);

/*Rutas usuario*/
Route::get('get-users', [UserController::class, 'getUsers'])->middleware(['auth:sanctum', 'hasrole:1']);
Route::get('get-user/{user_id}', [UserController::class, 'getUser'])->middleware(['auth:sanctum', 'hasrole:1']);
Route::post('save-user', [UserController::class, 'saveUser'])->middleware(['auth:sanctum', 'hasrole:1']);
Route::get('delete-user/{user_id}', [UserController::class, 'deleteUser'])->middleware(['auth:sanctum', 'hasrole:1']);

Route::get('send-birthday-mail', 'CronMailController@BirthdayMail');
Route::get('send-remember-mail', 'CronMailController@RememberActiveDate');
Route::get('cancelar-cita/{token}', 'CronMailController@cancelarCita');

/*Rutas video*/
Route::post('save-video', 'VideoController@saveVideo')->middleware(['auth:sanctum', 'hasrole:1']);
Route::get('get-all-videos', 'VideoController@getAllVideos')->middleware(['auth:sanctum', 'hasrole:1,2']);
Route::get('get-video-by-id/{video_id}', 'VideoController@getVideoById')->middleware(['auth:sanctum', 'hasrole:1']);
Route::get('change-video-active/{video_id}', 'VideoController@changeVideoActive')->middleware(['auth:sanctum', 'hasrole:1']);
Route::get('delete-video/{video_id}', 'VideoController@deleteVideo')->middleware(['auth:sanctum', 'hasrole:1,2']);


/*Rutas perfil*/
Route::post('change-password', 'PerfilController@changePassword')->middleware(['auth:sanctum', 'hasrole:1,2']);

/*Rutas Seccion*/
Route::get('get-secciones', 'SeccionController@getSecciones')->middleware(['auth:sanctum,android_users']);
Route::post('save-seccion', 'SeccionController@saveSeccion')->middleware(['auth:sanctum', 'hasrole:1,3']);
Route::get('delete-seccion/{seccion_id}', 'SeccionController@deleteSeccion')->middleware(['auth:sanctum', 'hasrole:1,3']);

/*Rutas Empleado*/
Route::get('get-empleados-and-secciones', 'EmpleadoController@getEmpleadosAndSecciones')->middleware(['auth:sanctum', 'hasrole:1,3']);
Route::post('save-empleado', 'EmpleadoController@saveEmpleado')->middleware(['auth:sanctum', 'hasrole:1,3']);
Route::get('delete-empleado/{empleado_id}', 'EmpleadoController@deleteEmpleado')->middleware(['auth:sanctum', 'hasrole:1,3']);

/*Rutas Turno*/
Route::get('get-turnos', 'TurnoController@getTurnos')->middleware(['auth:sanctum', 'hasrole:1,3']);
Route::post('save-turno', 'TurnoController@saveTurno')->middleware(['auth:sanctum', 'hasrole:1,3']);
Route::get('delete-turno/{turno_id}', 'TurnoController@deleteTurno')->middleware(['auth:sanctum', 'hasrole:1,3']);

/*Rutas Solicitudes*/
Route::get('get-solicitudes', 'SolicitudController@getSolicitudes')->middleware(['auth:sanctum', 'hasrole:1,3']);

/*Rutas Tiendas*/
Route::get('get-web-users', 'TiendaController@getWebUsers')->middleware(['auth:sanctum', 'hasrole:1']);
Route::get('get-web-users-tiendas', 'TiendaController@getWebUsersTiendas');//->middleware(['auth:sanctum', 'hasrole:1,2']);
Route::get('get-web-user/{user_id}', 'TiendaController@getWebUser')->middleware(['auth:sanctum', 'hasrole:1']);
Route::post('save-web-user', 'TiendaController@saveWebUser')->middleware(['auth:sanctum', 'hasrole:1']);
Route::get('delete-web-user/{user_id}', 'TiendaController@deleteWebUser')->middleware(['auth:sanctum', 'hasrole:1']);
/*Rutas Factura*/
Route::get('get-facturas','FacturaController@getFacturas')->middleware(['auth:sanctum']);

Route::get('get-facturas','FacturaController@getFacturas')->middleware(['auth:sanctum']);
Route::get('get-facturas-informe','FacturaController@getFacturaInforme')->middleware(['auth:sanctum']);

Route::get('get-factura/{id}','FacturaController@getFactura')->middleware(['auth:sanctum']);
Route::post('delete-factura','FacturaController@deleteFactura')->middleware(['auth:sanctum']);
Route::post('save-factura','FacturaController@saveFactura')->middleware(['auth:sanctum']);
Route::get('generate-factura/{id}','FacturaController@generateFacturaFromCita')->middleware(['auth:sanctum']);
Route::get('/exportar-facturas', 'FacturaController@export');

/*Rutas Informe*/
Route::get('get-horas-trabajadas', 'InformeController@informe');
Route::get('get-data-informe', 'InformeController@getData');
Route::post('get-tiempo-espera', 'InformeController@getTiempoEspera');
Route::post('get-tiempo-atencion', 'InformeController@getTiempoAtencion');
Route::post('get-tiempo-muerto', 'InformeController@getTiempoMuerto');
Route::post('get-no-atendidos', 'InformeController@getNoAtendidos');

/*Ruta cloud messagin*/
Route::post('/token', 'FirebaseController@postToken');

Route::get('get-config', 'ConfigController@getConfig');
Route::get('get-payment-config', 'ConfigController@getPaymentConfig');
Route::post('save-config', 'ConfigController@saveConfig');
Route::post('save-imagen-inicio','ConfigController@saveImagen');
Route::get('get-imagen-inicio','ConfigController@getBlob');
