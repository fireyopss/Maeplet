<?php

namespace App\Actions\Project;

use App\DTO\ProjectDTO;
use App\Models\Project;

class UpdateAction {
    public function execute(ProjectDTO $dto, Project $project): Project
    {
        $project->update($dto->toArray());
        return $project;
    }
}