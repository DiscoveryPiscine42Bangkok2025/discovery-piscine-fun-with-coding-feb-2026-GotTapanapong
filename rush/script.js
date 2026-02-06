// script.js
// Profile Data
const profiles = {
    1: {
        name: 'ฐาปนพงศ์ พงษ์บริบูรณ์',
        position: 'Multimedia',
        image: 'img/tpongbor2.jpg',
        bio: 'นักศึกษาแขนงมัลติมีเดียที่เรียนพัฒนาและออกแบบเกมด้วยความหลงใหลในเทคโนโลยีและความคิดสร้างสรรค์',
        hobbies: [
            'ออกแบบวิดีโอเกม',
            'เล่นวิดีโอเกม',
            'วิ่งออกกำลังกาย',
            'ดูฟุตบอล',
            'ถ่ายภาพธรรมชาติ',
            'ฟังเพลง'
        ],
        socialLinks: [
            { icon: 'f', label: 'Facebook', url: 'https://www.facebook.com/gotjangjang?locale=th_TH'},
            { icon: '📷', label: 'Instagram', url: 'https://www.instagram.com/gotttztp?igsh=MW5jb2p2bDl0MzB0OQ==' },
            { icon: 'G', label: 'GitHub', url: 'https://github.com/GotTapanapong' }
        ]
    },
2: {
        name: 'นัตชัย สุธรรม',
        position: 'Multimedia',
        image: 'img/nsutham2.jpg',
        bio: 'นักศึกษาแขนงมัลติมีเดียที่ทำงานด้านมัลติมีเดียด้วยใจรักเชื่อว่าภาพและเสียงคือพลังของการเล่าเรื่องและทุกผลงานคือโอกาสในการพัฒนาตัวเอง',
        hobbies: [
            'เล่นเกม',
            'ฟุตบอล',
            'ดูหนัง',
            'อ่านหนังสือ',
            'นอน',
            'ดื่มกาแฟอย่างมีสติ'
        ],
        socialLinks: [
            { icon: 'f', label: 'Facebook', url: 'https://www.facebook.com/nat.chay.su.thrrm' },
            { icon: '📷', label: 'Instagram', url: 'https://www.instagram.com/noslonely/' },
            { icon: 'G', label: 'GitHub', url: 'https://github.com/oatsutham' }
        ]
    }
};

// Modal Functions
function showModal(title, content) {
    $('#modalTitle').text(title);
    $('#modalContent').html(content);
    $('#modalConfirmBtn').hide();
    $('#modalOverlay').addClass('active');
}

function closeModal() {
    $('#modalOverlay').removeClass('active');
}

$(document).ready(function() {
    // Go to profile detail
    $(document).on('click', '.profile-card, .view-profile', function(e) {
        e.preventDefault();
        const profileId = $(this).closest('.profile-card').data('id');
        showProfile(profileId);
    });

    // Go back to home
    $('#backBtn, #logo, #nav-home').click(function(e) {
        e.preventDefault();
        goHome();
    });

    // Modal close buttons
    $('#modalClose, #modalCancelBtn').click(function() {
        closeModal();
    });
    // Navbar person buttons
    $('#nav-person1').click(function(e) {
        e.preventDefault();
        showProfile(1);
    });

    $('#nav-person2').click(function(e) {
        e.preventDefault();
        showProfile(2);
    });

    // Navigation with Modal
    $('#nav-about').click(function(e) {
        e.preventDefault();
        showModal(
            '📱 เกี่ยวกับ Profile Hub',
            '<p>Profile Hub v1.0</p><p style="margin-top: 1rem; color: #666;">สร้างด้วย jQuery 3.7.1 และ HTML5</p><p style="margin-top: 1rem; color: #666;">โปรแกรมแนะนำตัวคนอย่างมืออาชีพและเป็นระเบียบ</p>'
        );
    });

    $('#nav-contact').click(function(e) {
        e.preventDefault();
        showModal(
            '📧 ติดต่อเรา',
            '<p><strong>📧 Email:</strong> 66070053@kmitl.ac.th และ 66070102@kmitl.ac.th</p><p style="margin-top: 1rem;"><strong>☎️ Phone:</strong> +66 2-000-0000</p><p style="margin-top: 1rem;"><strong>📍 Address:</strong> Bangkok, Thailand</p><p style="margin-top: 1rem;"><strong>⏰ Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>'
        );
    });

    // Close modal when clicking overlay
    $('#modalOverlay').click(function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    function showProfile(id) {
        const profile = profiles[id];
        
        $('#profileImage').attr('src', profile.image).attr('alt', profile.name);
        $('#profileName').text(profile.name);
        $('#profilePosition').text(profile.position);
        $('#profileBio').text(profile.bio);

        // Build hobbies list
        let hobbiesHtml = '';
        profile.hobbies.forEach(hobby => {
            hobbiesHtml += `<li>${hobby}</li>`;
        });
        $('#hobbyList').html(hobbiesHtml);

        // Build social links
        let socialHtml = '';
        profile.socialLinks.forEach(social => {
            socialHtml += `<a href="${social.url}" title="${social.label}" target="_blank">${social.icon}</a>`;
        });
        $('#socialLinksList').html(socialHtml);

        // Switch pages with animation
        $('#homePage').removeClass('active');
        $('#detailPage').addClass('active');

        // Scroll to top
        $('html, body').animate({ scrollTop: 0 }, 300);
    }

    function goHome() {
        $('#detailPage').removeClass('active');
        $('#homePage').addClass('active');
        $('html, body').animate({ scrollTop: 0 }, 300);
    }
});
