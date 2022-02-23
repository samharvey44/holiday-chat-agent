<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Temperature\IndexRequest;
use App\Http\Resources\TemperatureResource;
use App\Http\Controllers\Controller;
use App\Models\Temperature;

class TemperatureController extends Controller {
    /**
     * Return a collection of all temperatures.
     *
     * @param \App\Http\Requests\Temperature\IndexRequest $request
     * 
     * @return \App\Http\Resources\TemperatureResource
     */
    public function index(IndexRequest $request) {
        return TemperatureResource::collection(Temperature::all());
    }
}
