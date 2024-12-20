import axios from 'axios';

export async function getMetricsDetails(url) {
    try {
        let response = await axios.post(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}`,
            {
                "formFactor": "ALL_FORM_FACTORS",
                "origin": url
            })
        let { key, metrics, collectionPeriod } = response.data.record;
        return { ...key, url, ...collectionPeriod, ...metrics };
    } catch (e) {
        throw {...e,url}
    }
}

export async function getMetricsDetailsAll(urls) {
    let result = urls.map((url) => {
        return getMetricsDetails(url)
    })
    let urlsResponse = await Promise.allSettled(result);
    return urlsResponse;
}