<?php

namespace Database\Seeders\CSV;

use Illuminate\Database\Seeder;
use App\Models\Temperature;
use App\Models\Continent;
use App\Models\Location;
use App\Models\Category;
use App\Models\Country;
use App\Models\Holiday;
use App\Models\City;

class HolidayDataSeeder extends Seeder {
    /**
     * The file to be used for importing data.
     *
     * @var string
     */
    private $file = __DIR__ . '/holidaydata.csv';

    /**
     * Create a holiday record, and any necessary related records.
     *
     * @param array $record
     * 
     * @return void
     */
    private function createRecord(array $record) {
        $holiday = Holiday::make([
            'price_per_night' => $record['PricePerPerNight'],
            'hotel_name' => $record['HotelName'],
            'rating' => $record['StarRating'],
        ]);

        $holiday->continent()->associate(Continent::firstOrCreate([
            'name' => ucfirst($record['Continent']),
        ]));

        $holiday->location()->associate(Location::firstOrCreate([
            'name' => ucfirst($record['Location']),
        ]));

        $holiday->temperature()->associate(Temperature::firstOrCreate([
            'name' => ucfirst($record['TempRating']),
        ]));

        $holiday->category()->associate(Category::firstOrCreate([
            'name' => ucfirst($record['Category']),
        ]));

        $holiday->country()->associate(Country::firstOrCreate([
            'name' => ucfirst($record['Country']),
        ]));

        if ($record['City'] !== '') {
            $holiday->city()->associate(City::firstOrCreate([
                'name' => ucfirst($record['City']),
            ]));
        }

        $holiday->save();
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $csv = array_map('str_getcsv', file($this->file, FILE_SKIP_EMPTY_LINES));
        $keys = array_shift($csv);

        foreach ($csv as $i => $row) {
            $csv[$i] = array_combine($keys, $row);
        }

        collect($csv)->each(function ($record) {
            $this->createRecord($record);
        });
    }
}
