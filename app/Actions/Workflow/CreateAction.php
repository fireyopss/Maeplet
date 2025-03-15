<?php

namespace App\Actions\Workflow;

use App\DTO\WorkflowDTO;
use App\Models\Workflow;

class CreateAction {

    public function execute(WorkflowDTO $dto): Workflow
    {
        dd($dto->toArray());
    }

}