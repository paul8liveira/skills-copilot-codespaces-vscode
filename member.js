function skillsMember(name, skills) {
    this.name = name;
    this.skills = skills;

    this.addSkill = function(skill) {
        this.skills.push(skill);
    };

    this.getSkills = function() {
        return this.skills;
    };
}