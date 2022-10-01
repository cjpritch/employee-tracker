INSERT INTO employees
    (first_name, last_name, role_, manager)
VALUES
    ('James', 'Fraser', 'Sales Lead', 'null'),
    ('Bob', 'London', 'Sales Person', 'James Fraser'),
    ('Derek', 'Smith','Lead Engineer', 'null'),
    ('Monica', 'Cooper', 'Engineer', 'Derek Smith'),
    ('Alex', 'Dryden', 'Account Lead', 'null'),
    ('Heather', 'Lupine', 'Accountant', 'Alex Dryden');

INSERT INTO roles
    (job_title, salary, dept_id)
VALUES
    ('Sales Lead', 1000, 1),
    ('Sales Person', 700, 1),
    ('Lead Engineer', 700, 2),
    ('Engineer', 500, 2),
    ('Account Lead', 1000, 3),
    ('Accountant', 500, 3);

INSERT INTO departments
    (department)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Accounting');