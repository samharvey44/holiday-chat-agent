<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;

class UserSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $user = User::make([
            'name' => 'Sam',
            'password' => bcrypt('password'),
            'email' => 'sam@test.com',
        ]);

        $user->role()->associate(Role::where('name', 'admin')->first());

        $user->save();
    }
}
