<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('holidays', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->integer('price_per_night');
            $table->tinyInteger('rating');
            $table->string('hotel_name');

            $table->foreignId('temperature_id')->constrained();
            $table->foreignId('continent_id')->constrained();
            $table->foreignId('location_id')->constrained();
            $table->foreignId('category_id')->constrained();
            $table->foreignId('country_id')->constrained();

            $table->foreignId('city_id')->nullable()->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('holidays');
    }
};
