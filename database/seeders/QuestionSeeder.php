<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Temperature;
use App\Models\Location;
use App\Models\Question;
use App\Models\Category;
use App\Models\Answer;

class QuestionSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        Question::create([
            'key' => 'category',
            'text' => 'What type of holiday are you hoping for?',
            'order' => 1,
        ])->answers()->saveMany(
            Category::all()
                ->map(function ($category) {
                    return new Answer([
                        'text' => $category->name,
                    ]);
                })
        );

        Question::create([
            'key' => 'temperature',
            'text' => 'What is your ideal temperature?',
            'order' => 2,
        ])->answers()->saveMany(
            Temperature::all()
                ->map(function ($temp) {
                    return new Answer([
                        'text' => $temp->name,
                    ]);
                })
        );

        Question::create([
            'key' => 'location',
            'text' => 'What surroundings would you like to stay within?',
            'order' => 3,
        ])->answers()->saveMany(
            Location::all()
                ->map(function ($location) {
                    return new Answer([
                        'text' => $location->name,
                    ]);
                })
        );
    }
}
