<?php

namespace App\Http\Controllers\Project;

use App\Actions\Project\DeleteAction;
use App\Models\Project;

class DeleteController {
    public function __invoke(DeleteAction $action,  Project $project) {
        $action->execute($project);
        return redirect()->route('dashboard.projects');
    }
}