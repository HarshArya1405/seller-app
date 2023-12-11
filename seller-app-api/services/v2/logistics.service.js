import config from "../../lib/config";
import HttpRequest from "../../utils/HttpRequest";
import logger from '../../lib/logger'

class LogisticsService {

    async getLogistics(logisticsMessageId, retailMessageId, type) {
        try {

            logger.log('info', `[Ondc Service] get logistics : param :`, { logisticsMessageId, retailMessageId, type });

            let headers = {};
            let query = ''
            if (type === 'select') {
                query = `logisticsOnSearch=${logisticsMessageId}&select=${retailMessageId}`
            } else if (type === 'init') {
                query = `logisticsOnInit=${logisticsMessageId}&init=${retailMessageId}`
            } else if (type === 'confirm') {
                query = `logisticsOnConfirm=${logisticsMessageId}&confirm=${retailMessageId}`
            } else if (type === 'track') {
                query = `logisticsOnTrack=${logisticsMessageId}&track=${retailMessageId}`
            } else if (type === 'status') {
                query = `logisticsOnStatus=${logisticsMessageId}&status=${retailMessageId}`
            } else if (type === 'update') {
                query = `logisticsOnUpdate=${logisticsMessageId}&update=${retailMessageId}`
            } else if (type === 'cancel') {
                query = `logisticsOnCancel=${logisticsMessageId}&cancel=${retailMessageId}`
            } else if (type === 'support') {
                query = `logisticsOnSupport=${logisticsMessageId}&support=${retailMessageId}`
            }
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/v1/response/network-request-payloads?${query}`,
                'get',
                {},
                headers
            );

            let result = await httpRequest.send();
            return result.data

        } catch (e) {
            logger.error('error', `[Ondc Service] get logistics : response :`, e);
            return e
        }

    }

    async postSelectRequest(searchRequest) {
        try {
            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/logistics/v1/search`,
                'POST',
                searchRequest,
                headers
            );
            await httpRequest.send();
        } catch (e) {
            logger.error('error', `[Logistics Service] post http select response : `, e);
            return e
        }

    }


    async postInitRequest(searchRequest) {
        try {
            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/logistics/v1/init`,
                'POST',
                searchRequest,
                headers
            );
            await httpRequest.send();
        } catch (e) {
            logger.error('error', `[Logistics Service] post http select response : `, e);
            return e
        }
    }


    async postConfirmRequest(searchRequest) {
        try {
            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/logistics/v1/confirm`,
                'POST',
                searchRequest,
                headers
            );
            await httpRequest.send();

        } catch (e) {
            logger.error('error', `[Logistics Service] post http select response : `, e);
            return e
        }
    }

    async postStatusRequest(searchRequest) {
        try {
            let headers = {};
            let httpRequest = new HttpRequest(
                config.get("sellerConfig").BPP_URI,
                `/protocol/logistics/v1/status`,
                'POST',
                searchRequest,
                headers
            );
            await httpRequest.send();
        } catch (e) {
            logger.error('error', `[Logistics Service] post http select response : `, e);
            return e
        }
    }
}

export default LogisticsService;
