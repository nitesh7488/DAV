const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  let student = await prisma.student.findFirst();
  if (!student) {
    const user = await prisma.user.create({
      data: {
        email: 'student@dav.com',
        password: 'password123',
        role: 'STUDENT',
      }
    });

    const studentClass = await prisma.class.create({
      data: {
        name: '10',
        section: 'A',
      }
    });

    student = await prisma.student.create({
      data: {
        userId: user.id,
        admissionNo: 'ADM12345',
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: new Date('2010-01-01'),
        gender: 'Male',
        address: '123 Test St',
        classId: studentClass.id,
      }
    });
    console.log('Created dummy student:', student.id);
  } else {
    console.log('Found existing student:', student.id);
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
