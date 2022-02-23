<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\QuestionController;
use App\Http\Controllers\API\HolidayController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [UserController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/questions', [QuestionController::class, 'index']);

    Route::get('/holidays', [HolidayController::class, 'index']);
});

Route::middleware('guest')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
});
