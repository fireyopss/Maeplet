<?php

namespace App\Actions\Workflow;

use App\Models\Workflow;

class DeleteAction {

    public function execute(Workflow $workflow): ?bool
    {
        return $workflow->delete();
    }

}