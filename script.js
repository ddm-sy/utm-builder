window.onload = function() {
    console.log("페이지 로드 완료! JavaScript 실행 시작");

    // 버튼 클릭 이벤트 추가
    const generateButton = document.getElementById("generate-button");
    if (generateButton) {
        generateButton.addEventListener("click", generateUTM);
    } else {
        console.error("'generate-button' ID를 가진 요소를 찾을 수 없습니다!");
    }
};

function generateUTM() {
    console.clear();
    console.log("generateUTM() 실행됨!");

    // Base URL 가져오기 (기본값 설정)
    const baseURL = (document.getElementById('base_url')?.value || "https://lg.com").trim();
    console.log("Base URL:", baseURL);

    // `querySelectorAll()`을 사용하여 UTM 캠페인 값 자동 수집
    let utmCampaignValues = [...document.querySelectorAll('[data-utm-campaign]')]
        .map(input => input.value.trim()) // 각 input의 value 가져오기
        .filter(value => value !== '') // 빈 값 제거
        .join('_'); // "_"로 연결

    // `querySelectorAll()`을 사용하여 UTM 콘텐츠 값 자동 수집
    let utmContentValues = [...document.querySelectorAll('[data-utm-content]')]
        .map(input => input.value.trim())
        .filter(value => value !== '')
        .join('_');

    // 기본 UTM 변수 정의
    const source = document.getElementById('utm_source')?.value || "";
    const medium = document.getElementById('utm_medium')?.value || "";

    // 기본 URL과 UTM 매개변수 구성
    let utmParams = [];
    if (source) utmParams.push(`utm_source=${encodeURIComponent(source)}`);
    if (medium) utmParams.push(`utm_medium=${encodeURIComponent(medium)}`);
    if (utmCampaignValues) utmParams.push(`utm_campaign=${encodeURIComponent(utmCampaignValues)}`);
    if (utmContentValues) utmParams.push(`utm_content=${encodeURIComponent(utmContentValues)}`);

    // 최종 URL 생성
    let fullURL = `${baseURL}?${utmParams.join('&')}`;
    document.getElementById('generated-url').value = fullURL;
    console.log("Generated URL:", fullURL);
}
