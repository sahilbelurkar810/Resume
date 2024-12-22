$(document).ready(function() {
    $('#resumeForm').on('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            address: $('#address').val(),
            education: $('#education').val(),
            experience: $('#experience').val(),
            skills: $('#skills').val()
        };

        // Hide the form
        $('#resumeForm').hide();

        // Generate resume HTML
        let resumeHTML = `
            <div class="resume-document">
                <div class="resume-header">
                    <h1>${formData.name}</h1>
                    <div class="contact-info">
                        <div><i class="fas fa-envelope"></i> ${formData.email}</div>
                        <div><i class="fas fa-phone"></i> ${formData.phone}</div>
                        ${formData.address ? `<div><i class="fas fa-map-marker-alt"></i> ${formData.address}</div>` : ''}
                    </div>
                </div>

                <div class="resume-section">
                    <h2><i class="fas fa-graduation-cap"></i> Education</h2>
                    <div class="section-content">
                        ${formData.education.replace(/\n/g, '<br>')}
                    </div>
                </div>

                ${formData.experience ? `
                <div class="resume-section">
                    <h2><i class="fas fa-briefcase"></i> Professional Experience</h2>
                    <div class="section-content">
                        ${formData.experience.replace(/\n/g, '<br>')}
                    </div>
                </div>` : ''}

                <div class="resume-section">
                    <h2><i class="fas fa-tools"></i> Professional Skills</h2>
                    <div class="section-content">
                        ${formData.skills.replace(/\n/g, '<br>')}
                    </div>
                </div>
            </div>
            <div class="resume-actions">
                
                <button onclick="$('#resumeForm').show(); $('#resumeOutput').hide();" class="edit-btn">
                    <i class="fas fa-edit"></i> Edit Resume
                </button>
                <a href="../index.html" class="back-btn">
                    <i class="fas fa-home"></i> Back to Home
                </a>
            </div>
        `;

        // Display the resume
        $('#resumeOutput').html(resumeHTML).show();
    });
});
