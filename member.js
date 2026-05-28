function skillsMember(){
    return {
        Restricted: "E",
        templateURL: 'modules/skills/views/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '=',
            skill: '='
        }
    };
}
