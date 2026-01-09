<?php


/*Route::get('/reset-password/{token}', function (string $token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');*/

Route::get('/{any}', function () {
    return view('base');
})->where('any', '^(?!.*(?:api|storage)).*$');

Route::get('/gracias', function(){
  return view('stripe.gracias');
});

Route::get('/login', 'App\Http\Controllers\AppControllers\WebAuthController@login')->name('login');

Route::post('login', 'App\Http\Controllers\AppControllers\WebAuthController@doLogin')->name('do.login');

Route::get('symlink', 'App\Http\Controllers\SymLinkController@create');

Route::get('renovar-token', 'App\Http\Controllers\SymLinkController@renovarToken');

Route::get('cliente', 'App\Http\Controllers\AppControllers\PruebaController@index')->middleware('auth:web');

Route::get('empleados', 'App\Http\Controllers\AppControllers\PruebaController@empleados')->middleware('auth:web');

Route::get('tienda-inicio', 'App\Http\Controllers\AppControllers\PruebaController@tienda')->middleware('auth:web');

//Route::get('get-cliente-actual', 'App\Http\Controllers\AppControllers\PruebaController@getClientesActuales')->middleware('auth:web');

Route::get('turno-actual', 'App\Http\Controllers\AppControllers\PruebaController@turnoActual')->middleware('auth:web');

Route::post('set-turno-actual', 'App\Http\Controllers\AppControllers\PruebaController@setTurno')->middleware('auth:web');
