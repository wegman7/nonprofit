from django.apps import AppConfig


class ProfilesConfig(AppConfig):
    name = 'profiles'

    def ready(self):
        print('ready!')
        import profiles.signals
