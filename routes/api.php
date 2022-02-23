<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\TemperatureController;
use App\Http\Controllers\API\ContinentController;
use App\Http\Controllers\API\QuestionController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\LocationController;
use App\Http\Controllers\API\HolidayController;
use App\Http\Controllers\API\CountryController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\CityController;

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

    Route::prefix('/holidays')->group(function () {
        Route::get('/', [HolidayController::class, 'index']);

        Route::post('/', [HolidayController::class, 'store']);
    });

    Route::get('/temperatures', [TemperatureController::class, 'index']);
    Route::get('/continents', [ContinentController::class, 'index']);
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/locations', [LocationController::class, 'index']);
    Route::get('/countries', [CountryController::class, 'index']);
    Route::get('/cities', [CityController::class, 'index']);
});

Route::middleware('guest')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);

    Route::post('/register', [AuthController::class, 'register']);
});
