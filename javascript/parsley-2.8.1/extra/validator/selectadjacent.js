window.Parsley
.addValidator('selectedAdjacent', {
    requirementType: 'string',

    validateMultiple: function(value, requirement) {
        var options = requirement.split(", ");
        var previous_index = null;

        for(i=0;i<value.length;i++) {
            var index = options.indexOf(value[i]);

            if(previous_index == null) {
                previous_index = index;
                continue;
            }

            $diff = index - previous_index;

            if($diff > 1) {
                return false;
            } else {
                previous_index = index;
            }
        }
    }
});