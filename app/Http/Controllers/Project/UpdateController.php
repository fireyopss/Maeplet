<?php

namespace App\Http\Controllers\Project;

use App\Actions\Project\UpdateAction;
use App\DTO\ProjectDTO;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Project;

class UpdateController {
    public function __invoke(UpdateProjectRequest $request, UpdateAction $action, Project $project)
    {
        $dto = new ProjectDTO(...$request->safe());

        $action->execute($dto, $project);

        return redirect()->route('dashboard.projects');
    }
}