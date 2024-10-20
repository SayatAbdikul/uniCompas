# Generated by Django 5.1.2 on 2024-10-18 15:40

import django.contrib.auth.models
import django.contrib.auth.validators
import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='AcademicProgram',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10, unique=True)),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='UniUni',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=1000, null=True)),
                ('link', models.CharField(blank=True, max_length=256, null=True)),
                ('img', models.CharField(blank=True, max_length=256, null=True)),
                ('longitude', models.FloatField(blank=True, null=True)),
                ('latitude', models.FloatField(blank=True, null=True)),
                ('kz_title', models.CharField(blank=True, max_length=20, null=True)),
                ('the_rank', models.CharField(max_length=10)),
                ('the_rank_arts', models.CharField(blank=True, max_length=10, null=True)),
                ('the_rank_eng', models.CharField(blank=True, max_length=10, null=True)),
                ('the_rank_bus', models.CharField(blank=True, max_length=10, null=True)),
                ('the_rank_law', models.CharField(blank=True, max_length=10, null=True)),
                ('the_rank_clin', models.CharField(blank=True, max_length=10, null=True)),
                ('the_rank_life', models.CharField(blank=True, max_length=10, null=True)),
                ('the_rank_comp', models.CharField(blank=True, max_length=10, null=True)),
                ('the_rank_phys', models.CharField(blank=True, max_length=10, null=True)),
                ('the_rank_edu', models.CharField(blank=True, max_length=10, null=True)),
                ('the_rank_psych', models.CharField(blank=True, max_length=10, null=True)),
                ('the_title', models.CharField(max_length=255)),
                ('the_overall_score', models.CharField(blank=True, max_length=10, null=True)),
                ('the_nid', models.IntegerField(blank=True, null=True)),
                ('the_location', models.CharField(blank=True, max_length=255, null=True)),
                ('the_subjects_offered', models.TextField(blank=True, null=True)),
                ('qs_title', models.CharField(max_length=256)),
                ('qs_overall_score', models.FloatField(blank=True, null=True)),
                ('qs_rank', models.PositiveIntegerField(blank=True, null=True)),
                ('qs_nid', models.IntegerField(blank=True, null=True)),
                ('qs_rank_arts_humanities', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_arts', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_linguistics', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_music', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_theology', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_archaeology', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_architecture', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_art_design', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_classics', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_english', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_history', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_art_history', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_modern_languages', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_performing_arts', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_philosophy', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_eng_tech', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_chem_eng', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_civil_eng', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_comp_sci', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_data_sci', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_elec_eng', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_pet_eng', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_mech_eng', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_mining_eng', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_nat_sci', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_chemistry', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_earth_marine_sci', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_env_sci', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_geography', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_geology', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_geophysics', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_materials_sci', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_math', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_physics_astronomy', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_life_sci', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_agriculture', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_anatomy', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_bio_sci', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_dentistry', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_medicine', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_pharmacy', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_nursing', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_psychology', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_rank_vet_sci', models.CharField(blank=True, max_length=10, null=True)),
                ('qs_city', models.CharField(blank=True, max_length=255, null=True)),
                ('qs_country', models.CharField(blank=True, max_length=255, null=True)),
                ('qs_score_nid', models.CharField(blank=True, max_length=255, null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Scholarship',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('minimum_score', models.IntegerField()),
                ('available_grants', models.IntegerField()),
                ('academic_program', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='unicompass_app.academicprogram')),
                ('university', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scholarships', to='unicompass_app.uniuni')),
            ],
            options={
                'unique_together': {('university', 'academic_program', 'year')},
            },
        ),
    ]
