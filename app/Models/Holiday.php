<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Holiday extends Model {
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int|string>
     */
    protected $fillable = [
        'price_per_night',
        'hotel_name',
        'rating',
    ];

    /**
     * The continent this holiday is within.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function continent() {
        return $this->belongsTo(Continent::class, 'continent_id');
    }

    /**
     * The location of this holiday.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function location() {
        return $this->belongsTo(Location::class, 'location_id');
    }

    /**
     * The temperature of this holiday.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function temperature() {
        return $this->belongsTo(Temperature::class, 'temperature_id');
    }

    /**
     * The category of this holiday.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category() {
        return $this->belongsTo(Category::class, 'category_id');
    }

    /**
     * The country this holiday is within.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function country() {
        return $this->belongsTo(Country::class, 'country_id');
    }

    /**
     * The city this holiday is within.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function city() {
        return $this->belongsTo(City::class, 'city_id');
    }
}
