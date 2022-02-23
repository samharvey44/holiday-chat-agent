<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Holiday\StoreRequest;
use App\Http\Requests\Holiday\IndexRequest;
use App\Http\Resources\HolidayResource;
use App\Http\Controllers\Controller;
use App\Models\Temperature;
use App\Models\Continent;
use App\Models\Location;
use App\Models\Category;
use App\Models\Country;
use App\Models\Holiday;
use App\Models\City;

class HolidayController extends Controller {
    /**
     * Get holidays matching request parameters.
     *
     * @param \App\Http\Requests\Holiday\IndexRequest $request
     * 
     * @return \App\Http\Resources\HolidayResource
     */
    public function index(IndexRequest $request) {
        $holidays = Holiday::with(
            'temperature',
            'continent',
            'category',
            'location',
            'country',
            'city'
        )
            ->where('price_per_night', '<=', $request->input('pricePerNight'));

        if ($request->input('temperature') !== 'any') $holidays->whereRelation('temperature', 'name', $request->input('temperature'));
        if ($request->input('category') !== 'any') $holidays->whereRelation('category', 'name', $request->input('category'));
        if ($request->input('location') !== 'any') $holidays->whereRelation('location', 'name', $request->input('location'));

        return HolidayResource::collection(
            $holidays->paginate(6)
        );
    }

    /**
     * Store a new holiday.
     *
     * @param \App\Http\Requests\Holiday\StoreRequest $request
     * 
     * @return void
     */
    public function store(StoreRequest $request) {
        $holiday = Holiday::make([
            'hotel_name' => $request->input('hotelName'),
            'price_per_night' => $request->input('pricePerNight'),
            'rating' => $request->input('rating'),
        ]);

        if ($request->input('city')) $holiday->city()->associate(City::findOrFail($request->input('city')));

        $holiday->temperature()->associate(Temperature::findOrFail($request->input('temperature')));
        $holiday->continent()->associate(Continent::findOrFail($request->input('continent')));
        $holiday->category()->associate(Category::findOrFail($request->input('category')));
        $holiday->location()->associate(Location::findOrFail($request->input('location')));
        $holiday->country()->associate(Country::findOrFail($request->input('country')));

        $holiday->save();
    }
}
