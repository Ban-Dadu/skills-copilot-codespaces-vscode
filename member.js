function skillsMember(){
    return {
        name: 'skills-member',
        template: `
            <div class="skills-member">
                <h3>{{ name }}</h3>
                <p>{{ description }}</p>
            </div>
        `,
        props: {
            name: String,
            description: String
        }   
    }
}
