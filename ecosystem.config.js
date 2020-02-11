module.exports = {
  apps : [
    {
    name: 'task1',
    script: './task3/bin/www',
    watch: false,
    max_memory_restart: '200M',
    max_restarts: 5,
  },
  {
    name: 'task2',
    script: './task4/bin/www',
    watch: false,
    max_restarts: 5,
    cron_restart:'30 * * * *',
    max_memory_restart: '200M',
  }
],
};
