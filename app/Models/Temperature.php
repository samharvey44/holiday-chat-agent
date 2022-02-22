<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Temperature extends Model {
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int|string>
     */
    protected $fillable = [
        'name',
    ];

    /**
     * The holidays with this temperature.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function holidays() {
        return $this->hasMany(Holiday::class, 'temperature_id');
    }
}
