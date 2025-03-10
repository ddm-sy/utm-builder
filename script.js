function generateUTM() {

    // 기본 UTM 변수 정의
    const baseURL = (document.getElementById('base_url')?.value || "https://lg.com").trim();
    const source = document.getElementById('utm_source').value;
    const medium = document.getElementById('utm_medium').value;

    // utm_campaign에 포함될 값들 (기본값 포함)
    let utmCampaignValues = [
        document.getElementById('country_subsidiary').value || "HQ-HS-SEEDING",
        document.getElementById('product_line').value || "HS",
        document.getElementById('product_type').value,
        document.getElementById('country_domain').value,
        document.getElementById('year').value,
        document.getElementById('quarter').value,
        document.getElementById('agency').value || "CNS",
        document.getElementById('theme').value,
        document.getElementById('marketing_strategy').value || "Viral",
        document.getElementById('phase').value,
        document.getElementById('landing_detail').value,
        document.getElementById('market').value,
        document.getElementById('creative_format').value,
        document.getElementById('country_fullname').value,
        document.getElementById('ad_format').value,
        document.getElementById('landing_detail').value,
        document.getElementById('funnel_stage').value,
        document.getElementById('apms').value || "NA",
        document.getElementById('platform').value,
        document.getElementById('channel').value,
        document.getElementById('audience_stratgey').value || "OTH",
        document.getElementById('bidding_stratgey').value,
        document.getElementById('kpi').value,
        document.getElementById('campaign_type').value
    ].filter(value => value.trim() !== '').join('_');

    // utm_content에 포함될 값들
    let utmContentValues = [
        document.getElementById('creation_date').value,
        document.getElementById('creative_description').value,
        document.getElementById('audience_description').value,
        document.getElementById('kpi').value
    ].filter(value => value.trim() !== '').join('_');

    // 기본 URL과 UTM 매개변수 구성
    let utmParams = [];

    if (source) utmParams.push(`utm_source=${source}`);
    if (medium) utmParams.push(`utm_medium=${medium}`);
    if (utmCampaignValues) utmParams.push(`utm_campaign=${utmCampaignValues}`);
    if (utmContentValues) utmParams.push(`utm_content=${utmContentValues}`);

    // 최종 URL 생성
    let fullURL = `${baseURL}?${utmParams.join('&')}`;
    document.getElementById('generated-url').value = fullURL;
}
