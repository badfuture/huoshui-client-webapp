module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name: "huoshui_client_webapp",
      script: "app.js",
      instances: 0,
      exec_mode: "cluster",
      watch: "true",
      max_memory_restart: "500M",
      error_file: "logs/error.log",
      out_file: "logs/out.log",
      merge_logs: true,
      env: {
        NODE_ENV: "development"
      },
      env_dev : {
        NODE_ENV: "development"
      },
      env_prod : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    dev : {
      user : "ubuntu",
      host : "webapp.huoshui.tk",
      ref  : "origin/master",
      repo : "https://github.com/badfuture/huoshui-client-webapp.git",
      path : "/home/ubuntu/huoshui_client_webapp",
      "post-deploy" : "npm install && pm2 startOrRestart pm2.config.js --env dev",
      env  : {
        NODE_ENV: "development"
      }
    },
    prod : {
      user : "root",
      host : "ze.huoshui.org",
      ref  : "origin/master",
      repo : "https://github.com/badfuture/huoshui-client-webapp.git",
      path : "/root/huoshui_client_webapp",
      "post-deploy" : "npm install && pm2 startOrRestart pm2.config.js --env prod",
      env  : {
        NODE_ENV: "production"
      }
    }
  }
}
