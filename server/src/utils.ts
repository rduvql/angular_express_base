import winston = require("winston");

export const getServerBasePath = (): string => __dirname;

export const storage = new Map<string, string>();
