<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Country\IndexRequest;
use App\Http\Resources\CountryResource;
use App\Http\Controllers\Controller;
use App\Models\Country;

class CountryController extends Controller {
    /**
     * Return a collection of all countries.
     *
     * @param \App\Http\Requests\Country\IndexRequest $request
     * 
     * @return \App\Http\Resources\CountryResource
     */
    public function index(IndexRequest $request) {
        return CountryResource::collection(Country::all());
    }
}
