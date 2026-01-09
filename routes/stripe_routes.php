<?php

use App\Http\Controllers\StripeControllers\StripeController;

Route::post('stripe-web-hook', [StripeController::class, 'webHook']);
