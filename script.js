function generateUTM() {
    const source = document.getElementById('utm_source').value;
    const medium = document.getElementById('utm_medium').value;
    const campaign = document.getElementById('utm_campaign').value;
    const content = document.getElementById('utm_content').value;
    const term = document.getElementById('utm_term').value;
  
    let baseURL = "https://www.example.com";
    let utmParams = [];
    if (source) utmParams.push(`utm_source=${source}`);
    if (medium) utmParams.push(`utm_medium=${medium}`);
    if (campaign) utmParams.push(`utm_campaign=${campaign}`);
    if (content) utmParams.push(`utm_content=${content}`);
    if (term) utmParams.push(`utm_term=${term}`);
    
    let fullURL = `${baseURL}?${utmParams.join('&')}`;
    document.getElementById('generated-url').value = fullURL;
  }
  