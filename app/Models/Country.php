<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model {
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * The holidays in this country.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function holidays() {
        return $this->hasMany(Holiday::class, 'country_id');
    }
}
