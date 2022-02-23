<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Holiday\IndexRequest;
use App\Http\Resources\HolidayResource;
use App\Http\Controllers\Controller;
use App\Models\Holiday;

class HolidayController extends Controller {
    /**
     * Get holidays matching request parameters.
     *
     * @param \App\Http\Requests\Holiday\IndexRequest $request
     * 
     * @return \App\Http\Resources\HolidayResource
     */
    public function index(IndexRequest $request) {
        $holidays = Holiday::where('price_per_night', '<=', $request->input('pricePerNight'))
            ->whereRelation('temperature', 'name', $request->input('temperature'))
            ->whereRelation('category', 'name', $request->input('category'))
            ->whereRelation('location', 'name', $request->input('location'));

        return HolidayResource::collection(
            $holidays->with(
                'continent',
                'country',
                'location',
                'temperature',
                'category',
                'city'
            )->get()
        );
    }
}
