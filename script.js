function generateUTM() {
    const source = document.getElementById('utm_source').value;
    const medium = document.getElementById('utm_medium').value;
    const campaign = document.getElementById('utm_campaign').value;
    const content = document.getElementById('utm_content').value;
  
    let baseURL = (`landing_page=${LandingPage}`);
    let utmParams = [];

    if (source) utmParams.push(`utm_source=${Source}`);
    if (medium) utmParams.push(`utm_medium=${Medium}`);

    if (campaign) utmParams.push(`utm_campaign=${Campaign}`); 
    if (campaign) utmParams.push(`country_subsidiary=${CountrySubsidiary}`);
    if (campaign) utmParams.push(`product_line=${ProductLine}`);
    if (campaign) utmParams.push(`product_type=${ProudctType}`); 
    if (campaign) utmParams.push(`country_domain=${CountryDomain}`);
    if (campaign) utmParams.push(`year=${Year}`);
    if (campaign) utmParams.push(`quarter=${Quarter}`);
    if (campaign) utmParams.push(`agency=${Agency}`);
    if (campaign) utmParams.push(`theme=${Theme}`);
    if (campaign) utmParams.push(`marketing_strategy=${MarketingStrategy}`);
    if (campaign) utmParams.push(`phase=${Phase}`);
    if (campaign) utmParams.push(`landing_detail=${Landing_detail}`);
    if (campaign) utmParams.push(`market=${Market}`);
    if (campaign) utmParams.push(`creative_format=${CreativeFormat}`);
    if (campaign) utmParams.push(`country_fullname=${CountryFullName}`);
    if (campaign) utmParams.push(`Ad_format=${AdFormat}`);
    if (campaign) utmParams.push(`landing_detail=${LandingDetail}`);
    if (campaign) utmParams.push(`funnel_stage=${FunnelStage}`);
    if (campaign) utmParams.push(`apms_po=${APMS_PO}`);
    if (campaign) utmParams.push(`platform=${PlatForm}`);
    if (campaign) utmParams.push(`channel=${Channel}`);
    if (campaign) utmParams.push(`audience_strategy=${AudienceStrategy}`); 
    if (campaign) utmParams.push(`bidding_strategy=${BiddingStrategy}`);
    if (campaign) utmParams.push(`kpi=${KPI}`);
    if (campaign) utmParams.push(`campaign_type=${CampaignType}`);
  
    if (content) utmParams.push(`utm_content=${content}`); 
    if (content) utmParams.push(`creation_date=${CreationDate}`); 
    if (content) utmParams.push(`creative_description=${CreativeDescription}`); 
    if (content) utmParams.push(`audience_description=${AudienceDescription}`); 
    if (content) utmParams.push(`kpi=${KPI}`);

    let fullURL = `${baseURL}?${utmParams.join('&')}`;
    document.getElementById('generated-url').value = fullURL;
  }
  
