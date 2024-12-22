$(document).ready(function() {
    $('#biodataForm').on('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            // Personal Information
            name: $('#name').val(),
            dob: $('#dob').val(),
            age: $('#age').val(),
            gender: $('#gender').val(),
            nationality: $('#nationality').val(),
            religion: $('#religion').val(),
            maritalStatus: $('#maritalStatus').val(),
            
            // Contact Information
            phone: $('#phone').val(),
            email: $('#email').val(),
            address: $('#address').val(),
            
            // Physical Attributes
            height: $('#height').val(),
            weight: $('#weight').val(),
            bloodGroup: $('#bloodGroup').val(),
            
            // Family Information
            fatherName: $('#fatherName').val(),
            fatherOccupation: $('#fatherOccupation').val(),
            motherName: $('#motherName').val(),
            motherOccupation: $('#motherOccupation').val(),
            siblings: $('#siblings').val(),
            
            // Education & Professional
            education: $('#education').val(),
            occupation: $('#occupation').val(),
            experience: $('#experience').val(),
            
            // Additional Information
            languages: $('#languages').val(),
            hobbies: $('#hobbies').val()
        };

        // Hide the form
        $('#biodataForm').hide();

        // Generate biodata HTML
        let biodataHTML = `
            <div class="biodata-document">
                <div class="biodata-header">
                    <div class="header-content">
                        <h1>${formData.name}</h1>
                        <div class="basic-info">
                            <div><i class="fas fa-envelope"></i> ${formData.email}</div>
                            <div><i class="fas fa-phone"></i> ${formData.phone}</div>
                            <div><i class="fas fa-map-marker-alt"></i> ${formData.address}</div>
                        </div>
                    </div>
                </div>

                <div class="biodata-grid">
                    <div class="biodata-section">
                        <h2><i class="fas fa-user"></i> Personal Details</h2>
                        <div class="details-grid">
                            <div class="detail-item">
                                <span class="label">Date of Birth:</span>
                                <span class="value">${formData.dob}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Age:</span>
                                <span class="value">${formData.age} years</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Gender:</span>
                                <span class="value">${formData.gender}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Marital Status:</span>
                                <span class="value">${formData.maritalStatus}</span>
                            </div>
                            ${formData.nationality ? `
                            <div class="detail-item">
                                <span class="label">Nationality:</span>
                                <span class="value">${formData.nationality}</span>
                            </div>` : ''}
                            ${formData.religion ? `
                            <div class="detail-item">
                                <span class="label">Religion:</span>
                                <span class="value">${formData.religion}</span>
                            </div>` : ''}
                        </div>
                    </div>

                    ${(formData.height || formData.weight || formData.bloodGroup) ? `
                    <div class="biodata-section">
                        <h2><i class="fas fa-ruler"></i> Physical Attributes</h2>
                        <div class="details-grid">
                            ${formData.height ? `
                            <div class="detail-item">
                                <span class="label">Height:</span>
                                <span class="value">${formData.height} cm</span>
                            </div>` : ''}
                            ${formData.weight ? `
                            <div class="detail-item">
                                <span class="label">Weight:</span>
                                <span class="value">${formData.weight} kg</span>
                            </div>` : ''}
                            ${formData.bloodGroup ? `
                            <div class="detail-item">
                                <span class="label">Blood Group:</span>
                                <span class="value">${formData.bloodGroup}</span>
                            </div>` : ''}
                        </div>
                    </div>` : ''}

                    ${(formData.fatherName || formData.motherName || formData.siblings) ? `
                    <div class="biodata-section">
                        <h2><i class="fas fa-users"></i> Family Information</h2>
                        <div class="details-grid">
                            ${formData.fatherName ? `
                            <div class="detail-item">
                                <span class="label">Father's Name:</span>
                                <span class="value">${formData.fatherName}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Father's Occupation:</span>
                                <span class="value">${formData.fatherOccupation || 'N/A'}</span>
                            </div>` : ''}
                            ${formData.motherName ? `
                            <div class="detail-item">
                                <span class="label">Mother's Name:</span>
                                <span class="value">${formData.motherName}</span>
                            </div>
                            <div class="detail-item">
                                <span class="label">Mother's Occupation:</span>
                                <span class="value">${formData.motherOccupation || 'N/A'}</span>
                            </div>` : ''}
                            ${formData.siblings ? `
                            <div class="detail-item">
                                <span class="label">Number of Siblings:</span>
                                <span class="value">${formData.siblings}</span>
                            </div>` : ''}
                        </div>
                    </div>` : ''}

                    <div class="biodata-section">
                        <h2><i class="fas fa-graduation-cap"></i> Education</h2>
                        <div class="section-content">
                            ${formData.education.replace(/\n/g, '<br>')}
                        </div>
                    </div>

                    ${formData.occupation || formData.experience ? `
                    <div class="biodata-section">
                        <h2><i class="fas fa-briefcase"></i> Professional Details</h2>
                        ${formData.occupation ? `
                        <div class="detail-item">
                            <span class="label">Current Occupation:</span>
                            <span class="value">${formData.occupation}</span>
                        </div>` : ''}
                        ${formData.experience ? `
                        <div class="section-content">
                            <span class="label">Work Experience:</span><br>
                            ${formData.experience.replace(/\n/g, '<br>')}
                        </div>` : ''}
                    </div>` : ''}

                    ${formData.languages || formData.hobbies ? `
                    <div class="biodata-section">
                        <h2><i class="fas fa-star"></i> Additional Information</h2>
                        ${formData.languages ? `
                        <div class="detail-item">
                            <span class="label">Languages Known:</span>
                            <span class="value">${formData.languages}</span>
                        </div>` : ''}
                        ${formData.hobbies ? `
                        <div class="section-content">
                            <span class="label">Hobbies & Interests:</span><br>
                            ${formData.hobbies.replace(/\n/g, '<br>')}
                        </div>` : ''}
                    </div>` : ''}
                </div>
            </div>
            <div class="biodata-actions">
                <button onclick="$('#biodataForm').show(); $('#biodataOutput').hide();" class="edit-btn">
                    <i class="fas fa-edit"></i> Edit Biodata
                </button>
                <a href="../index.html" class="back-btn">
                    <i class="fas fa-home"></i> Back to Home
                </a>
            </div>
        `;

        // Display the biodata
        $('#biodataOutput').html(biodataHTML).show();
    });

    // Calculate age automatically when date of birth changes
    $('#dob').on('change', function() {
        const dob = new Date($(this).val());
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        
        $('#age').val(age);
    });
});
