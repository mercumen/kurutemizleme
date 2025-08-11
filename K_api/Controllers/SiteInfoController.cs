using Microsoft.AspNetCore.Mvc;
using K_api.Models;  // Modelleri ekle

namespace K_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SiteInfoController : ControllerBase
    {
        private readonly AppDbContext _context;
        public SiteInfoController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet("intro")]
        public IActionResult GetIntro()
        {
            var intro = _context.Siteinfo.FirstOrDefault();
            return Ok(intro);
        }


        [HttpGet("products")]
        public IActionResult GetProducts()
        {
            var products = _context.Products.ToList();
            return Ok(products);
        }

        [HttpGet("contact")]
        public IActionResult GetContact()
        {
            var contact = _context.ContactInfos.FirstOrDefault();

            return Ok(contact);
        }
        [HttpPost("products")]
        public IActionResult AddProduct([FromBody] Product newProduct)
        {
            if (newProduct == null)
                return BadRequest("Ürün verisi eksik.");

            _context.Products.Add(newProduct);
            _context.SaveChanges();

            return Ok(newProduct);
        }
        [HttpDelete("products/{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
                return NotFound("urun bulunamadi");
            _context.Products.Remove(product);
            _context.SaveChanges();
            return Ok("urun basariyla silindi");
        }
        [HttpPut("products/{id}")]
        public IActionResult UpdateProduct(int id, [FromBody] Product updatedProduct)
        {
            var existingProduct = _context.Products.FirstOrDefault(p => p.Id == id);
            if (existingProduct == null)
                return NotFound("urun bulunamadi");

            existingProduct.Price = updatedProduct.Price;
            _context.SaveChanges();
            return Ok(existingProduct);
        }
        [HttpPut("intro")]
        public IActionResult UpdateSiteInfo([FromBody] SiteInfo updatedSiteInfo)
        {
            var existingSiteInfo = _context.Siteinfo.FirstOrDefault();
            if (existingSiteInfo == null)
                return NotFound("info bulunamadi");
            existingSiteInfo.Info = updatedSiteInfo.Info;

            _context.SaveChanges();
            return Ok(existingSiteInfo);
        }
    }
}
