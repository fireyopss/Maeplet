<?php

namespace App\Actions\Project;

use App\DTO\ProjectDTO;
use App\Models\Project;

class CreateAction {

    public function execute(ProjectDTO $dto): Project
    {
        return Project::create(array_merge($dto->toArray(), ['user_id' => auth()->id()]));
    }

}