<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\City\IndexRequest;
use App\Http\Resources\CityResource;
use App\Http\Controllers\Controller;
use App\Models\City;

class CityController extends Controller {
    /**
     * Return a collection of all cities.
     *
     * @param \App\Http\Requests\City\IndexRequest $request
     * 
     * @return \App\Http\Resources\CityResource
     */
    public function index(IndexRequest $request) {
        return CityResource::collection(City::all());
    }
}
