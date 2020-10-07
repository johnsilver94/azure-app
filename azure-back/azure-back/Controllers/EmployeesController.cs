using azure_back.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace azure_back.Controllers
{
    [Authorize]
    [Route("[controller]")]
    public class EmployeesController : Controller
    {
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            List<Employee> employees = new List<Employee>
            {
                new Employee { Id = 1, Name = "Ion Cretu", Company = "Falcon SRL", City = "Iasi" },
                new Employee { Id = 2, Name = "Cretu Ion", Company = "Dog SRL", City = "Sub Podu Iloaei" }
            };
            return employees;
        }
    }
}
