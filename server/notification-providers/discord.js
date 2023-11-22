const NotificationProvider = require("./notification-provider");
const axios = require("axios");
const { DOWN, UP } = require("../../src/util");

class Discord extends NotificationProvider {

    name = "discord";

    /**
     * @inheritdoc
     */
    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        let okMsg = "Sent Successfully.";

        try {
            const discordDisplayName = notification.discordUsername || "Uptime Kuma";

            // If heartbeatJSON is null, assume we're testing.
            if (heartbeatJSON == null) {
                let discordtestdata = {
                    username: discordDisplayName,
                    content: msg,
                };
                await axios.post(notification.discordWebhookUrl, discordtestdata);
                return okMsg;
            }

            let address;

            switch (monitorJSON["type"]) {
                case "ping":
                    address = monitorJSON["hostname"];
                    break;
                case "port":
                case "dns":
                case "gamedig":
                case "steam":
                    address = monitorJSON["hostname"];
                    if (monitorJSON["port"]) {
                        address += ":" + monitorJSON["port"];
                    }
                    break;
                default:
                    address = monitorJSON["url"];
                    break;
            }

            // If heartbeatJSON is not null, we go into the normal alerting loop.
            if (heartbeatJSON["status"] === DOWN) {
                let discorddowndata = {
                    username: discordDisplayName,
                    embeds: [{
                        title: "<:red:1176425658650472492> Service " + monitorJSON["name"] + " Is Down ",
                        color: 16711680,
                        url: "https://discord.gg/w8FBRVBrbX",
                        timestamp: heartbeatJSON["time"],
                        fields: [
                            {
                                name: "<:icons_store:1176426264094056539> Service Name",
                                value: monitorJSON["name"],
                            },
                            {
                                name: monitorJSON["type"] === "push" ? "<:icons_gitmerge:1176426544370024528> Service Type" : "<:icons_gitmerge:1176426544370024528> Service URL",
                                value: monitorJSON["type"] === "push" ? "Heartbeat" : address,
                            },
                            {
                                name: `<:icons_reminder:1176426625714356315> Time (${heartbeatJSON["timezone"]})`,
                                value: heartbeatJSON["localDateTime"],
                            },
                            {
                                name: "<:icons_activities:1163923362062540941> Uptime",
                                value: heartbeatJSON["uptime"] == null ? "N/A" : heartbeatJSON["uptime"] + " %",
                            },
                            {
                                name: "<:icons_activities:1163923362062540941> Avg. Ping",
                                value: heartbeatJSON["ping"] == null ? "N/A" : heartbeatJSON["ping"] + " ms",
                            },
                            {
                                name: "<:icons_info:1176426720425947157> Error",
                                value: heartbeatJSON["msg"] == null ? "N/A" : heartbeatJSON["msg"],
                            },
                        ],
                    }],
                };

                if (notification.discordPrefixMessage) {
                    discorddowndata.content = notification.discordPrefixMessage;
                }

                await axios.post(notification.discordWebhookUrl, discorddowndata);
                return okMsg;

            } else if (heartbeatJSON["status"] === UP) {
                let discordupdata = {
                    username: discordDisplayName,
                    embeds: [{
                        title: "<:green:1176425594532147260> Service " + monitorJSON["name"] + " is UP! ",
                        color: 65280,
                        url: "https://discord.gg/w8FBRVBrbX",
                        timestamp: heartbeatJSON["time"],
                        fields: [
                            {
                                name: "<:icons_store:1176426264094056539> Service Name",
                                value: monitorJSON["name"],
                            },
                            {
                                name: monitorJSON["type"] === "push" ? "<:icons_gitmerge:1176426544370024528> Service Type" : "<:icons_gitmerge:1176426544370024528> Service URL",
                                value: monitorJSON["type"] === "push" ? "Heartbeat" : address,
                            },
                            {
                                name: `<:icons_reminder:1176426625714356315> Time (${heartbeatJSON["timezone"]})`,
                                value: heartbeatJSON["localDateTime"],
                            },
                            {
                                name: "<:icons_activities:1163923362062540941> Uptime",
                                value: heartbeatJSON["uptime"] == null ? "N/A" : heartbeatJSON["uptime"] + " %",
                            },
                            {
                                name: "<:icons_activities:1163923362062540941> Avg. Ping",
                                value: heartbeatJSON["ping"] == null ? "N/A" : heartbeatJSON["ping"] + " ms",
                            },
                            {
                                name: "<:icons_info:1176426720425947157> Ping",
                                value: heartbeatJSON["ping"] == null ? "N/A" : heartbeatJSON["ping"] + " ms",
                            },
                        ],
                    }],
                };

                if (notification.discordPrefixMessage) {
                    discordupdata.content = notification.discordPrefixMessage;
                }

                await axios.post(notification.discordWebhookUrl, discordupdata);
                return okMsg;
            }
        } catch (error) {
            this.throwGeneralAxiosError(error);
        }
    }

}

module.exports = Discord;
